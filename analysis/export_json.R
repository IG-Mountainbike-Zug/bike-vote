library(tidyverse)
library(dplyr)
library(purrr)
library(jsonlite)

generate_slug <- function(value) {
  return(URLencode(tolower(gsub(" ", "-", value))))
}

generate_sample <- function(row) {
  list(
    slug = generate_slug(row$name),
    name = row$name,
    partyId = which(party_info$name == row$party),
    ridesMtb = if_else(row$mtb_active == "1", TRUE, FALSE),
    answers = map(
      1:8, ~ list(
        questionId = .x,
        answer = as.integer(row[[.x + 4]])
      )
    ),
    statement = row$mtb_statement
  )
}

export_data_to_json <- function(data, party_info, ordinal_map, new_names) {
  # Common answers list based on ordinal_map
  common_answers <- map2(
    unname(ordinal_map), 
    names(ordinal_map), 
    ~ list(
      value = .x + 1,
      text = .y
    )
  )
  
  # Questions keys that are relevant
  question_keys <- c(
    "mtb_support_tolerace", "mtb_positive_health", "mtb_infra_funding",
    "mtb_region_quali", "mtb_attr_supply", "mtb_economy",
    "mtb_tourism", "mtb_interests"
  )
  
  # Use new_names to populate questions_info
  questions_info <- tibble(
    id = seq_along(question_keys),
    key = question_keys,
    text = new_names[question_keys]
  )
  
  # Create JSON object
  json_data <- list(
    name = "Kanton Zug",
    parties = party_info %>% 
      rowwise() %>% 
      mutate(id = cur_group_id()) %>% 
      ungroup() %>% 
      dplyr::select(id, name, color),
    questions = questions_info %>%
      mutate(
        answers = list(common_answers)
      ) %>% 
      dplyr::select(id, text, answers),
    samples = lapply(1:nrow(data), function(i) generate_sample(data[i, ]))
  )
  
  # Convert to JSON
  json_text <- jsonlite::toJSON(json_data, pretty = TRUE, auto_unbox = TRUE)
  
  # Print JSON
  # print(json_text)
  
  # Save to file if needed
  writeLines(json_text, "export.json")
  
  return("JSON file has been created.")
}

export_mds_to_json <- function(data) {
  # Create JSON object
  json_data <- data %>% 
    mutate(
      slug = generate_slug(name),
      x = V1,
      y = V2
    ) %>% 
    dplyr::select(slug, name, color, party, x, y)
  
  
  # Convert to JSON
  json_text <- jsonlite::toJSON(json_data, pretty = TRUE, auto_unbox = TRUE)
  
  # Print JSON
  # print(json_text)
  
  # Save to file if needed
  writeLines(json_text, "export_mds.json")
  
  return("JSON file has been created.")
}

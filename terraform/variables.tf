variable "netlify_api_token" {
  type        = string
  sensitive   = true
  description = "The Netlify API token that is used to authenticate and perform action on Netlify"
}

variable "netlify_default_team_slug" {
  type        = string
  sensitive   = false
  description = "The default Netlify team slug, used to create Netlify sites"
}

variable "spotlight_site_id" {
  type        = string
  sensitive   = false
  description = "The Netlify site ID of the Spotlight site"
}

variable "api_base_url" {
  type        = string
  sensitive   = false
  description = "The base URL of the news API used to fetch articles"
}

variable "api_key" {
  type        = string
  sensitive   = true
  description = "The secret API key that is used to authorize requests on the API"
}

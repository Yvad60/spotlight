provider "netlify" {
  token             = var.netlify_api_token
  default_team_slug = var.netlify_default_team_slug
}

data "netlify_site" "spotlight" {
  id = var.spotlight_site_id
}

resource "netlify_environment_variable" "api_base_url" {
  site_id = data.netlify_site.spotlight.id
  key     = "VITE_API_BASE_URL"
  values = [{
    context = "all"
    value   = var.api_base_url
  }]
}

resource "netlify_environment_variable" "api_key" {
  site_id = data.netlify_site.spotlight.id
  key     = "VITE_API_KEY"
  values = [{
    context = "all"
    value   = var.api_key
  }]
}

resource "netlify_site_build_settings" "spotlight" {
  site_id           = data.netlify_site.spotlight.id
  production_branch = "main"
  build_command     = "pnpm build"
  publish_directory = "dist"
}

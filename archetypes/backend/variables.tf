variable "backend_s3_bucket_id" {
  default     = "backend-s3-bucket-id-terraform.state"
  description = "S3 object where store remote backend state"
  type        = string
  nullable    = false
}

variable "backend_dynamodb_table" {
  default     = "backend_dynamodb_table_terraform_lock"
  description = "DynaoDB table for state lock"
  type        = string
  nullable    = false
}

locals {
  environment_data = { for tuple in regexall("(.*)=(.*)", file("./.env")) : tuple[0] => tuple[1] }

  description = "read .env from backend directory because i cant rechead the environment file from root directory"
  common_tags = {
    createdBy   = "devops team sngular"
    environment = local.environment_data.ENVIRONMENT
  }
}


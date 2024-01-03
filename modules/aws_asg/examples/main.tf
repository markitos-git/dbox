module "aws_asg" {
  source              = "../"
  environment         = var.environment
  project_name        = var.project_name
  company_name        = var.company_name
  common_tags         = var.common_tags
  aws_profile         = var.aws_profile
  aws_region          = var.aws_region
  desired_size        = var.desired_size
  image_id            = var.image_id
  instance_type       = var.instance_type
  instance_max_size   = var.instance_max_size
  instance_min_size   = var.instance_min_size
  user_data_filepath  = var.user_data_filepath
  security_groups_ids = var.security_groups_ids
  subnets_ids         = var.subnets_ids
  target_group_arns   = var.target_group_arns
}
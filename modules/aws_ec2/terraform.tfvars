aws_profile  = "markitos-info"
aws_region   = "eu-west-1"
project_name = "dbox"
company_name = "sngular"
environment  = "test"

ami           = "ami-0aef57767f5404a3c"
instance_type = "t2.micro"

common_tags = {
  Project   = "dbox"
  CreatedBy = "sngular"
}

#:{'..'}>----------------------------------------------
#:{'..'}> other variables and settings
#:{'..'}>----------------------------------------------
how_many = 1
security_groups_port_mapping_and_settings = [{
  name        = "ssh"
  port        = 22
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
  }, {
  name        = "http"
  port        = 80
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}]
#:{'..'}>----------------------------------------------

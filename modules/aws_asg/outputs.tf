output "autoscaling_group_arn" {
  value = aws_autoscaling_group.autoscaling_group_this.arn
}

output "autoscaling_group_id" {
  value = aws_autoscaling_group.autoscaling_group_this.id
}

output "launch_template_arn" {
  value = aws_launch_template.launch_template_this.arn
}

output "launch_template_id" {
  value = aws_launch_template.launch_template_this.id
}

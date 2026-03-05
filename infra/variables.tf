variable "db_name" {
  description = "Nombre de la base de datos"
  type        = string
}

variable "db_username" {
  description = "Usuario administrador"
  type        = string
}

variable "db_password" {
  description = "Contraseña del administrador"
  type        = string
  sensitive   = true
}

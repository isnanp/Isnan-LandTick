package authdto

type RegisterRequest struct {
	Username string `json:"username" gorm:"varchar(100)" validate:"required"`
	Email    string `json:"email" gorm:"type: varchar(255)" validate:"required"`
	Password string `json:"password" gorm:"type: :varchar(255)" validate:"required"`
	Fullname string `json:"fullname" gorm:"type: text" validate:"required"`
	Role     string `json:"role" gorm:"type: text"`
}

type LoginRequest struct {
	Username string `json:"username" gorm:"varchar(100)" validate:"required"`
	Password string `json:"password" gorm:"varchar(255)" validate:"required"`
}

package models

type User struct {
	ID       int    `json:"id" gorm:"primary_key:auto_increment"`
	Username string `json:"username" gorm:"type:varchar(100)"`
	Fullname string `json:"fullname" gorm:"type:text"`
	Email    string `json:"email" gorm:"type:varchar(255)"`
	Password string `json:"password" gorm:"type:varchar(255)"`
	Role     string `json:"role" gorm:"default:'user'"`
	Gender   string `json:"gender" gorm:"type:text"`
	Telphone string `json:"telphone" gorm:"type:text"`
	Address  string `json:"address" gorm:"type:text"`
}

type UserResponse struct {
	ID       int    `json:"id"`
	Fullname string `json:"fullname"`
	Email    string `json:"email"`
}

func (UserResponse) TableName() string {
	return "users"
}

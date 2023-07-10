package authdto

type RegisterResponse struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Fullname string `json:"fullname"`
	Role     string `json:"role"`
}

type LoginResponse struct {
	Fullname string `json:"fullname"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Token    string `json:"token"`
}

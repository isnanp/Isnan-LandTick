package models

type Station struct {
	ID   int    `json:"id" gorm:"primary_key"`
	Name string `json:"name" gorm:"type: varchar(255)"`
	Kota string `json:"kota"`
}

type StationResponse struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Kota string `json:"kota"`
}

func (StationResponse) TableName() string {
	return "stations"
}

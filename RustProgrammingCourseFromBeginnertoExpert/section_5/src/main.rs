use std::fmt::Display;

#[derive(Debug)]
struct Car {
    owner: String,
    year: u32,
    fuel_level: f32,
    price: u32,
}

impl Car {
    fn new(owner: &str, year: u32, fuel_level: f32, price: u32) -> Self {
        Self {
            owner: owner.to_string(),
            year,
            fuel_level,
            price,
        }
    }

    fn refuel(&mut self, gallons: f32) {
        self.fuel_level += gallons;
    }
}

impl Display for Car {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "Owner: {}\nYear: {}\nPrice: {}",
            self.owner, self.year, self.price
        )
    }
}

fn main() {
    let mut my_car = Car::new("ABC", 2020, 1.0, 25000);
    println!("{}", my_car);
}

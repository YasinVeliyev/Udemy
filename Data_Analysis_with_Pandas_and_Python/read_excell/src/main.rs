use std::fs::File;
use std::io::{BufRead, BufReader, Read};

fn main() {
    let mut file = File::open("../İcazə 1.xlsx").unwrap();
    let mut reader = BufReader::new(file);
    let mut s = String::new();
    reader.read_to_string(&mut s).unwrap();
    println!("{:?}", s)
}

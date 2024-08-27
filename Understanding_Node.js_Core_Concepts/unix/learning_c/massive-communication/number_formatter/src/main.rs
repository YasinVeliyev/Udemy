use std::env;
use std::fs;

use std::io::{stdin, Read, Write};

fn main() {
    let args = env::args().collect::<Vec<String>>();
    let mut buf = Vec::new();

    stdin().read_to_end(&mut buf).expect("msg");

    let mut file = fs::File::options()
        .write(true)
        .create(true)
        .open(&args[1])
        .unwrap();

    buf.split(|c| c == &b' ').for_each(|num| {
        let l = num.len();
        if l > 3 {
            let n = num
                .into_iter()
                .skip(l % 3)
                .map(|n| *n)
                .take(3)
                .collect::<Vec<u8>>();
            println!("{:?}", String::from_utf8_lossy(&n));
        }
        let mut b = Vec::from(num);
        b.insert(0, args[2].as_bytes()[0]);

        b.push(b' ');
        file.write(&b).unwrap();
    });
}

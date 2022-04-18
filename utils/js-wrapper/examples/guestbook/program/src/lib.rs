#![no_std]
#![feature(const_btree_new)]

use codec::{Decode, Encode};
use gstd::{msg, prelude::*, debug};
use scale_info::TypeInfo;

static mut STATE: BTreeMap<i32, MessageIn> = BTreeMap::new();

#[derive(TypeInfo, Decode, Encode)]
pub struct MessageIn {
    pub author: String,
    pub msg: String,
}

#[no_mangle]
pub unsafe extern "C" fn handle() {
    let input: Vec<u8> = msg::load_bytes();
    debug!(input);
    match input.first().unwrap() {
        &0 => {
            let v: Vec<u8> = input[1..].to_vec();
            let len: i32 = STATE.len() as i32 + 1;
            STATE.insert(len, MessageIn::decode(&mut v.as_slice()).unwrap());
            msg::reply(len.encode(), 0).unwrap();
        }
        &1 => {
            let v: Vec<u8> = input[1..].to_vec();
            let message_number = i32::decode(&mut v.as_slice()).unwrap();
            let message = STATE.remove(&message_number);
            msg::reply(&message.encode(), 0).unwrap();
        }
        _ => {}
    }
}

#[no_mangle]
pub unsafe extern "C" fn init() {}


pub unsafe extern "C" fn meta_state() -> *mut [i32; 2] {
    let author: Option<String> = msg::load().expect("Unable to decode input argument");
    let encoded = match author {
        None => STATE.encode(),
        Some(lookup_id) => WALLETS
            .iter()
            .filter(|w| w.id == lookup_id)
            .cloned()
            .collect::<Vec<Wallet>>()
            .encode(),
    };
}
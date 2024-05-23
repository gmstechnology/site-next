"use server"

import { sendMail } from './mail'


export async function send (data){
    await sendMail(data)
    return true
}
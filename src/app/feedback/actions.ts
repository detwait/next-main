'use server'
import { redirect } from 'next/navigation';

/*
  Example of server action.
  Normally here you would send data to database or something.
  You can call this action even from client components
*/
 
export async function createFeedback(formData: FormData) {
  redirect(`/thank-you?name=${formData.get('name')}`)
}
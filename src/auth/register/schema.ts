import * as z from 'zod'

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido'}),
  email: z.string().min(1, {message: 'El email es requerido'}).email({message: 'Email no válido'}),
  password: z.string().min(1, {message: 'La contraseña es requerida'}).min(8, { message: 'La contraseña debe tener como mínimo 8 caracteres'}),
  passwordConfirmation: z.string().min(1, {message: 'La contraseña de confirmación es requerida'})
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'Las contraseñas no coinciden',
  path: ['passwordConfirmation']
})

export type TRegister =  z.infer<typeof registerSchema>
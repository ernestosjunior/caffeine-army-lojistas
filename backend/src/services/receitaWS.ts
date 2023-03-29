import { BadRequestException } from '@nestjs/common'

export const getCnpjData = async (cnpj: string) => {
  const res = await fetch(`${process.env.RECEITA_WS_URL}/${cnpj}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (res.status !== 200) {
    throw new BadRequestException(
      'External service for CNPJ query is unavailable',
    )
  }

  const data = await res.json()

  return data
}

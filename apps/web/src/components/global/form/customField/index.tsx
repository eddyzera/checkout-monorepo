import React, { InputHTMLAttributes } from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface TextFieldProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  label?: string
}

export const CustomField = <T extends FieldValues>({
  name,
  label = '',
  className,
  ...props
}: TextFieldProps<T>) => {
  const { control } = useFormContext<T>()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col items-start gap-4 ${className}`}>
          {label && (
            <FormLabel className="text-sm text-foreground">{label}</FormLabel>
          )}
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

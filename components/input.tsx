'use client'

import { clsx } from 'clsx'

interface InputProps {
	label: string
	id: string
	type?: string
	required?: boolean
	disabled?: boolean
	placeholder?: string
	value?: string
	setValue?: (value: string) => void
}

export const Input: React.FC<InputProps> = ({
	label,
	id,
	type,
	required,
	disabled,
	placeholder,
	setValue,
	value,
}) => {
	return (
		<div className="p-2">
			<label htmlFor={id} className="text-lg font-semibold leading-6 text-gray-900">
				{label}
			</label>
			<div className="mt-2">
				<input
					id={id}
					type={type}
					autoFocus
					required
					autoComplete={id}
					disabled={disabled}
					value={value}
					placeholder={placeholder}
					className={clsx(
						`
                        w-full
                        rounded-md
                        py-1.5
                        px-1.5
                        border-0
                        text-gray-900
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-gray-700
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-sky-600
                        placeholder:text-gray-400
                        sm:text-base
                        sm:leading-6
                    `,
						disabled && 'opacity-50 cursor-default'
					)}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</div>
	)
}

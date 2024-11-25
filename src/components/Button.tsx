type Props = {
    buttonText: string,
    color: string
}

const Button = ({buttonText, color}: Props) => {
  return (
    <button className={`bg-${color} font-noto uppercase text-white py-2 px-3 text-xl`}>{buttonText}</button>
  )
}

export default Button
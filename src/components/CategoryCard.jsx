const CategoryCard = ({title, img, setCategory}) => {
  return (
    <div className='categoryCard' onClick={() => {
      setCategory(title)
      console.log(title)
    }}>
        <img src={img} alt="" className='w-[80px] h-[80px]'/>
        <p className='text-[#646060] text-sm'>{title}</p>
    </div>
  )
}

export default CategoryCard
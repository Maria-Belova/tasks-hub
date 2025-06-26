interface ICustomTooltip {
  active?: boolean;
  payload?: any[];
}
export const CustomTooltip = ({ active, payload }: ICustomTooltip) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-[#7C3AED] rounded-3xl text-white p-3'>
        <div>{payload[0].value} Projects</div>
      </div>
    );
  }

  return null;
};

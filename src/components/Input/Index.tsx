const Index = (props: any) => {
    const { label, register, name, outlined, placeholder } = props;

    return (
        <div>
            <label className={'text-[#fff] font-light'}>{label}</label>
            <input
                {...register(name)}
                className={`px-2 py-3 rounded-[6px] w-full ${outlined ? 'text-[white] border-[1px] border-[white] bg-transparent' : ''}`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Index;

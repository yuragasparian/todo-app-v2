export default (props) => {
    const colorClasses = {
        red: "bg-red-600 hover:bg-red-500",
        green: "bg-green-600 hover:bg-green-500",
        slate: "bg-slate-800 hover:bg-slate-700"
    };
    const buttonClass = `${colorClasses[props.color] || ""} rounded-md py-1 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 h-8`;

    return (
        <button
            type="button"
            onClick={props.onClick}
            className={buttonClass}
        >
            {props.children}
        </button>
    );
};


type ConnectButtonProps = {
    label: string;
    platformColor?: string; // background color
    icon?: React.ReactNode;
    onClick?: () => void;
};

export default function ConnectButton({
                                          label,
                                          platformColor = "#80A8FF",
                                          icon,
                                          onClick,
                                      }: ConnectButtonProps) {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center gap-2 h-9 w-[236px] rounded-md font-bold text-sm uppercase tracking-wide text-white hover:brightness-110 transition"
            style={{ backgroundColor: platformColor }}
        >
            {icon}
            {label}
        </button>
    );
}

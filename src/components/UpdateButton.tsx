type UpdateButtonProps = {
    label: string;
    onClick: () => void;
};

export default function UpdateButton({ label, onClick }: UpdateButtonProps) {
    return (
        <button
            onClick={onClick}
            className="w-[236px] h-9 rounded-md font-bold text-sm uppercase tracking-wide text-white transition-colors duration-200"
            style={{ backgroundColor: '#1F1FC2' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3B3BE5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1F1FC2')}
        >
            {label}
        </button>
    );
}

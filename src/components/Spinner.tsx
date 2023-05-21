import { IconBaseProps } from 'react-icons';
import { CgSpinner } from 'react-icons/cg';

type SpinnerProps = IconBaseProps;

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div role="status" className="inline">
      <CgSpinner className="h-6 w-6 animate-spin text-white" size={size} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;

import { ThreeDots } from 'react-loader-spinner';
import { FormatedLoader } from './Loader.styled';
export const Loader = () => (
  <FormatedLoader>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#f5904d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </FormatedLoader>
);

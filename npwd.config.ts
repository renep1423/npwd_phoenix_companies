import App from './src/App';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export const path = '/phoenix-companies';

export default () => ({
  id: 'npwd_phoenix_companies',
  nameLocale: 'Firmaer',
  color: '#ffffff',
  backgroundColor: '#101827',
  path,
  icon: BusinessCenterIcon,
  app: App,
});
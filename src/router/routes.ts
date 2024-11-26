import auth from './auth';
import front from './front';
import admin from '@/router/admin';
import error from '@/router/error';

export default [front, auth, ...admin, error];

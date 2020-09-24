import { Request, Response, NextFunction } from 'express';

export const allowIfAny = (
  roles: Array<'SUPERADMIN' | 'ADMIN' | 'COUNSELLOR' | 'SPECIALIST'>,
) => (req: Request, res: Response, next: NextFunction) => {
  const userRole = req.user?.customClaims?.role;

  if (!userRole) return next(new Error('not allowed'));

  if (roles.includes(userRole)) return next();

  return next(new Error('not allowed'));
};

// export const allowIfAny = (allowFunctions: Array<(req: Request, res: Response) => boolean>) => async (req: Request, res: Response, next: NextFunction) => {
//   const allow = (await Promise.mapSeries(allowFunctions, fn => fn(req, res))).some(v => v === true)

//   if (!allow) {
//     return next(new Error('Not allowed'))
//   }

//   res.locals.ensuredPermissions = true

//   return next()
// }

// export const isSuperAdmin = () => (req: Request, res: Response):boolean => {
//   const userRole = req.user?.customClaims?.role

//   if (!userRole) return false

//   return userRole === 'SUPERADMIN'
// }

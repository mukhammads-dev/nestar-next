import { makeVar } from '@apollo/client';

import { CustomJwtPayload } from '../libs/types/customJwtPayload';
export const themeVar = makeVar({});

//  ← REACTIVE VARIABLES (userVar) ======> 
// bir martda hosil qilib lyuboy joyda ishlatamiz va qayerda qiymat ozgarsa 
// qogan componentlarda ozgaradi

export const userVar = makeVar<CustomJwtPayload>({
	_id: '',
	memberType: '',
	memberStatus: '',
	memberAuthType: '',
	memberPhone: '',
	memberNick: '',
	memberFullName: '',
	memberImage: '',
	memberAddress: '',
	memberDesc: '',
	memberProperties: 0,
	memberRank: 0,
	memberArticles: 0,
	memberPoints: 0,
	memberLikes: 0,
	memberViews: 0,
	memberWarnings: 0,
	memberBlocks: 0,
});

//  ← WEBSOCKET ulanishi (Chat komponenti shu orqali gaplashadi)
// null = hali ulanmagan (server tomonda yoki token hali o'qilmagan)
export const socketVar = makeVar<WebSocket | null>(null);

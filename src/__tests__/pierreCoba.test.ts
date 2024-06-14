import { getTotalDices, getTotalTeamDices } from '../PierreCoba';
import { expect, describe, it } from 'vitest';

describe('getTotalDices', () => {
    describe('one dice', () => {
        it('should green return 1', () => {
            expect(getTotalTeamDices(['green'])).toBe(1);
        });
        it('should gray return 2', () => {
            expect(getTotalTeamDices(['gray'])).toBe(2);
        });
        it('should orange return 1 when total odd', () => {
            expect(getTotalTeamDices(['orange'])).toBe(1);
        });
        it('should yellow return -1', () => {
            expect(getTotalTeamDices(['yellow'])).toBe(-1);
        });    
        it('should blue return 0 when no other group', () => {
            expect(getTotalTeamDices(['blue'])).toBe(0);
        });        
        it('should pink return 3', () => {
            expect(getTotalTeamDices(['pink'])).toBe(3);
        });
    });
});
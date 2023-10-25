import DomainException from '../../../../src/Context/Shared/Domain/Exception/DomainException';
import InternalException from '../../../../src/Context/Shared/Domain/Exception/InternalException';
import { SharedMother } from '../../SharedMother';

const sut: InternalException = SharedMother.InternalException();

describe('InternalException', () => {
    it('should be an Error', () => {
        expect(sut).toBeInstanceOf(Error);
    });

    it('should be a DomainException', () => {
        expect(sut).toBeInstanceOf(DomainException);
    });
});

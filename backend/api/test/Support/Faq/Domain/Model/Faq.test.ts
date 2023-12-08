import BadRequestException from '../../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import Title from '../../../../../src/Context/Shared/Domain/ValueObject/Title';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import Solution from '../../../../../src/Context/Support/Faq/Domain/ValueObject/Solution';
import SupportMother from '../../../SupportMother';

describe('Faq model', () => {
    it('should create statically to create new faq, created at will be generated', () => {
        const sut: Faq = SupportMother.FaqToCreate();

        expect(sut.title).toBeInstanceOf(Title);
        expect(sut.title.value).toStrictEqual(SupportMother.FAQ_TITLE);
        expect(sut.solution).toBeInstanceOf(Solution);
        expect(sut.solution.value).toStrictEqual(SupportMother.FAQ_SOLUTION);
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.id.value).toStrictEqual(SupportMother.FAQ_ID);
    });

    it('should create statically to read existing faq, created at its required', () => {
        const sut: Faq = SupportMother.FaqToRead();

        expect(sut.title).toBeInstanceOf(Title);
        expect(sut.title.value).toStrictEqual(SupportMother.FAQ_TITLE);
        expect(sut.solution).toBeInstanceOf(Solution);
        expect(sut.solution.value).toStrictEqual(SupportMother.FAQ_SOLUTION);
        expect(sut.createdAt).toStrictEqual(SupportMother.FAQ_CREATED_AT);
        expect(sut.id.value).toStrictEqual(SupportMother.FAQ_ID);
    });

    it('should throw a bad request exception on invalid title', () => {
        expect(() => {
            SupportMother.FaqToRead(
                undefined,
                'a'.repeat(Title.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid solution', () => {
        expect(() => {
            SupportMother.FaqToRead(
                undefined,
                undefined,
                'a'.repeat(Solution.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid id', () => {
        expect(() => {
            SupportMother.FaqToRead(
                'non-valid-id',
                'a'.repeat(Title.MINIMUM_LENGTH - 1),
                'a'.repeat(Solution.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });
});
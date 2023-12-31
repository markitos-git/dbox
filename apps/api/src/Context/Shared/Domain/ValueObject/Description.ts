import BadRequestException from '../Exception/BadRequestException';
import Base64Text from './Base64Text';

class Description extends Base64Text {
    protected throwException(): void {
        throw new BadRequestException(
            'invalid Description, must be a valid base64 string'
        );
    }
}

export default Description;

import Id from '../../../../Shared/Domain/ValueObject/Id';
import TagTitle from '../ValueObject/TagTitle';
import TagValue from '../ValueObject/TagValue';

class Tag {
    private constructor(
        public readonly id: Id,
        public readonly title: TagTitle,
        public readonly value: TagValue,
        public readonly createdAt: Date
    ) {}

    public static create(
        id: Id,
        title: TagTitle,
        value: TagValue,
        createdAt?: Date
    ): Tag {
        let created: Date = new Date();
        if (createdAt !== undefined) {
            created = createdAt;
        }

        return new Tag(id, title, value, created);
    }

    public toPrimitives(): {
        id: string;
        title: string;
        value: string;
        createdAt: Date;
        } {
        return {
            id: this.id.value,
            title: this.title.value,
            value: this.value.value,
            createdAt: this.createdAt,
        };
    }
}

export default Tag;

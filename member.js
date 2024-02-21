function skillsMember() {
    return {
        name: 'skillsMember',
        type: 'MemberExpression',
        builder: ['object', 'property', 'computed'],
        visitor: ['object', 'property']
    };
}
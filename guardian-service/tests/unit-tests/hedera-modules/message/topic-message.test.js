const { expect, assert } = require('chai');

const {
    TopicMessage
} = require('../../../../dist/hedera-modules/message/topic-message');
const { MessageStatus } = require('../../../../dist/hedera-modules/message/message');
const { MessageType } = require('../../../../dist/hedera-modules/message/message-type');
const { MessageAction } = require('../../../../dist/hedera-modules/message/message-action');

describe('TopicMessage', function () {

    const testTopicMessage = {
        id: "testId",
        status: MessageStatus.ISSUE,
        type: MessageType.Topic,
        action: MessageAction.CreateSchema,
        name: "testName",
        description: "testDescription",
        owner: "testOwner",
        messageType: "testMessageType",
        childId: "testChildId",
        parentId: "testParentId",
        rationale: "testRationale"
    }

    it('Test TopicMessage', async function () {
        assert.throws(TopicMessage.fromMessageObject);
        assert.throws(TopicMessage.fromMessage);

        const topicMessage = new TopicMessage(MessageAction.CreateTopic);
        assert.exists(topicMessage);

        topicMessage.setDocument(testTopicMessage);
        assert.hasAllKeys(topicMessage.toMessageObject(), Object.keys(testTopicMessage));
        assert.isTrue(topicMessage.validate());

        const topicMessageByTestMessage = TopicMessage.fromMessageObject(testTopicMessage);
        assert.exists(topicMessageByTestMessage);
        assert.deepEqual(topicMessageByTestMessage.getUrl(), []);
        //assert.deepEqual(policyMessageByTestMessage.toMessageObject(), testPolicyMessage);

        const topicMessageByTestJSON = TopicMessage.fromMessage(JSON.stringify(testTopicMessage));
        assert.exists(topicMessageByTestJSON);
        assert.deepEqual(topicMessageByTestMessage.getUrl(), []);
        //assert.deepEqual(policyMessageByTestJSON.toMessageObject(), testPolicyMessage);
    });
});
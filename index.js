const Alexa = require('ask-sdk-core');

// Launch Request Handler
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Welcome to your Alexa Skill!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

// Custom Intent Handler
const CustomIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'You invoked the Custom Intent!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

// Help Intent Handler
const HelpIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'You can say hello to me!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

// Cancel Intent Handler
const CancelIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
      && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

// Error Handler
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.error(`Error: ${error.message}`);

    const speakOutput = 'Sorry, an error occurred.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

// Create the skill instance
const skill = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    CustomIntentHandler,
    HelpIntentHandler,
    CancelIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();

// Lambda handler
exports.handler = skill;

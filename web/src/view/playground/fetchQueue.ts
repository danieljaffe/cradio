import { gql } from '@apollo/client'

export const fragmentQueue = gql`
  fragment Queue on Queue {
    id
    score
    position
    song{
      name
      genre
      duration
      artist { name }
    }
    listeningSession {
      id
    }

  }
`


export const fetchQueue = gql`
  query FetchQueue($sessionId: Int!) {
  sessionQueue(sessionId: $sessionId ) {
    ...Queue
    }
  }
  ${fragmentQueue}
`

// export const subscribeSurveys = gql`
//   subscription SurveySubscription($surveyId: Int!) {
//     surveyUpdates(surveyId: $surveyId) {
//       ...Survey
//     }
//   }
//   ${fragmentSurvey}
//   ${fragmentSurveyQuestion}
//`

// export const fragmentSurveyQuestion = gql`
//   fragment SurveyQuestion on SurveyQuestion {
//     id
//     prompt
//     choices
//     answers {
//       answer
//     }
//   }
// `

// export const fetchSurvey = gql`
//   query FetchSurvey($surveyId: Int!) {
//     survey(surveyId: $surveyId) {
//       ...Survey
//     }
//   }
//   ${fragmentSurvey}
//   ${fragmentSurveyQuestion}
// `
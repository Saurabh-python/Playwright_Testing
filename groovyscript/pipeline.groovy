// pipeline{
//     agent{
//         label 'Linux'
//     }
//     parameters{
//         choice(
//             name : 'Test_type',
//             choices: ['smoke','sanity', 'regression', 'all']
//             description: 'Select test suite'
//         )
//         choice(
//             name: 'ENV',
//             choices: ['QA', 'Production'],
//             description: 'Select Environment'
//         )

//     }
//     environment{
//         Test_ENV = "${params.ENV}"
//     }
//     stages{
//         stage('Code commit'){
//             steps{
//                 echo 'Checking out source code'
//                 checkout scm
//             }
//         }
//         stage('Install Dependencies'){
//             steps{
//                 echo 'Installing Dependencies'
//                 sh 'npm ci'
//             }
//         }
//         stage('Run Tests'){
//             script{
//                 if (params.Test_type == 'all'){
//                     echo 'Running automation suite'
//                     sh 'npx playwright test'
//                 }
//                 else{
//                     echo 'Running smoke test cases'
//                     sh "npx playwright test --grep @${params.Test_type}"
//                 }

//             }
//         }
//     }
//     post{
//         success{
//             echo 'Test Passed'
//         }
//         failure{
//             echo 'Test Failed'
//         }
//         always{
//             echo 'Publishing Artifacts'
//         }
//     }
// } 

// import {test as Base, expect} from '@playwright/test'


// type MyFixture = {
//   custom_fixture: void;      //CLass name in case of POM 
// };

// export const test = Base.extend<MyFixture>({
//   custom_fixture : async({page}, use)=>{
//     console.log('I am executing before use(), Use me for Setup')
//     await use();
//     console.log('Teardown Happening, Executing after use')
//   }
// });

// export{expect};



import {test as Base, expect} from '@playwright/test'

type myfixture = {
  custom_fixture : void
  custom_fixture2 : void
}


export const test = Base.extend<myfixture>({
  custom_fixture: async({page}, use)=>{
    //setup steps
    await use();
    //teardown steps
  },
  custom_fixture2 : async({page}, use)=>{
    //setup steps 
    await use();
    //teardown steps
  }
});
export{expect};






const fb = require('@/services/firebase/init.js');

export const getAllExpos = {
  data() {
    return {
      search: '',

      exposResults: []
    }
  },
  methods: {
    fetchExpos() {

      const expoList = fb.expoCollection.orderBy("expo_date_start", "desc")

      expoList.onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type == 'added') {
              const doc = change.doc;
              const doctimeCreated = doc.data().expo_date_start;
              const formatedCreated = new Date(doctimeCreated);
              var month = formatedCreated.getUTCMonth() + 1; //months from 1-12
              var day = formatedCreated.getUTCDate();
              var year = formatedCreated.getUTCFullYear();

              var newdate = year + "/" + month + "/" + day;
              Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

              function short_months(dt) {
                return Date.shortMonths[dt.getMonth()];
              }
              const dt = new Date(doctimeCreated);
              this.exposResults.push({
                id: doc.id,
                expo_id: doc.data().expo_id,
                expo_owner_id: doc.data().expo_owner_id,
                expo_contact_name: doc.data().expo_contact_name,
                expo_owner_businessname: doc.data().expo_owner_businessname,
                expo_owner_businesLocation: doc.data().expo_owner_businesLocation,
                expo_description: doc.data().expo_description,
                expo_logo: doc.data().expo_logo,
                expo_date_start: day,
                expo_date_start_month: short_months(dt),
                expo_date_end: doc.data().expo_date_end,
                expo_address_town: doc.data().expo_address_town,
                expo_address_zip: doc.data().expo_address_zip,
                expo_address_country: doc.data().expo_address_country,
                expo_address_state: doc.data().expo_address_state,
                expo_address_address: doc.data().expo_address_address,
                expo_industry: doc.data().expo_industry,
                expo_promo_website: doc.data().expo_promo_website,
                expo_organizer: doc.data().expo_organizer,
                expo_organizer_website: doc.data().expo_organizer_website,
                expo_organizer_number: doc.data().expo_organizer_number,
                expo_name: doc.data().expo_name,
                expo_message_id: doc.data().expo_message_id,
                expo_organizer_email: doc.data().expo_organizer_email,
                expo_page_id: doc.data().expo_page_id,
                page_current_version: doc.data().page_current_version
              });

              //console.log(doc.data().file_ref)
            }
            if (change.type === 'modified') {
              // console.log("Modified doc: ");
            }
            if (change.type === 'removed') {
              // console.log("Removed doc: ");
            }
          });
        },
        (error) => {
          this.feedback = error;
        },
      );
    }
  },
  computed: {
    filteredList() {
      return this.exposResults.filter(expo => {
        return expo.expo_name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  created() {
    this.fetchExpos();

  }
};

<template>
  <div>
    <Navbar />
    <div class="container">
      <h5>Describe your issue</h5>
      <AlertDanger v-bind:errors="errors" />
      <form @submit="validateAndSubmitForm" action method="post">
        <div class="form-group">
          <label for="category">Select category:</label>
          <select
            id="category"
            class="form-control form-control-lg"
            v-on:change="updateSubcategory"
            v-model="category"
          >
            <option value>Choose a category</option>
            <option value="appliance">Appliance</option>
            <option value="furniture">Furniture</option>
            <option value="utility">Utility</option>
          </select>
        </div>

        <br />

        <div class="form-group">
          <label for="subcategory" name="subcategory_id">Select sub category:</label>
          <select id="subcat" class="form-control form-control-lg" v-model="subcategory"></select>
        </div>

        <br />

        <div class="form-group">
          <label for="description" name="desc">Describe your problem:</label>
          <textarea v-model="description" class="form-control" rows="3"></textarea>
        </div>

        <br />

        <input type="submit" value="Raise a Ticket" class="btn btn-outline-danger mb-2" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../Dashboard/Navbar";
import AlertDanger from "./AlertDanger";

export default {
  name: "Form",
  components: {
    Navbar,
    AlertDanger
  },
  data() {
    return {
      errors: [],
      validationComplete: false,
      category: "",
      subcategory: "",
      description: ""
    };
  },
  methods: {
    async validateAndSubmitForm(e) {
      this.errors = [];
      if (this.category == "") {
        this.errors.push("Category required");
      }

      if (this.subcategory == "") {
        this.errors.push("Subcategory required");
      }

      if (this.description == "") {
        this.errors.push("Description required");
      }

      e.preventDefault();

      var formData = {
        subcategory_id: this.subcategory,
        desc: this.description
      };
      /*eslint-disable*/
      console.log(formData);

      try {
        await axios
          .post("/api/task/create", formData)
          /*eslint-disable*/
          .then(res => {
            const status = JSON.parse(res.status);
            if (status == "201") {
              this.validationComplete = true;
              let success = this.validationComplete;
              this.$router.replace({ name: "Landing", params: { success } });
            }
          });
      } catch (err) {
        /*eslint-disable*/
        console.log(err);
      }
    },
    updateSubcategory() {
      var catgoryField = document.getElementById("category");
      var category = catgoryField.options[catgoryField.selectedIndex].value;

      let subcategory = [];

      switch (category) {
        case "appliance":
          subcategory = ["TV", "AC", "Washing Machine"];
          break;
        case "furniture":
          subcategory = ["Bed", "Sofa"];
          break;
        case "utility":
          subcategory = ["water", "electricity"];
          break;
        default:
          subcategory = [];
      }

      var map = new Object();
      map["TV"] = 1;
      map["AC"] = 2;
      map["Washing Machine"] = 3;
      map["Bed"] = 4;
      map["Sofa"] = 5;
      map["water"] = 6;
      map["electricity"] = 7;

      var allSubCategory = "<option value=''>Select a subcategory</option>";
      for (let i = 0; i < subcategory.length; i++) {
        allSubCategory =
          allSubCategory +
          "<option value='" +
          map[subcategory[i]] +
          "'>" +
          subcategory[i] +
          "</option>";
      }

      var subcatgoryField = document.getElementById("subcat");
      subcatgoryField.innerHTML = allSubCategory;
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Lato", sans-serif;
}
h5 {
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
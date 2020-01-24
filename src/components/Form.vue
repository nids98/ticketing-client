<template>
  <div class="container">
    <h3>Describe your issue</h3>
    <div v-if="errors.length">
      <div v-for="error in errors" v-bind:key="error" class="alert alert-danger">{{ error }}</div>
    </div>
    <div v-if="validationComplete">
      <div class="alert alert-success" role="alert">
        Ticket Raised successfully
        <img
          src="close.soon"
          style="display:none;"
          onerror="(function(el){ setTimeout(function(){ el.parentNode.parentNode.removeChild(el.parentNode); },10000 ); })(this);"
        />
      </div>
    </div>

    <form @submit="validateForm" action method="post">
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

      <input type="submit" value="Raise a Ticket" class="btn btn-primary mb-2" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Form",
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
    async validateForm(e) {
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

      if (this.errors.length == 0) {
        this.validationComplete = true;
      } else {
        this.validationComplete = false;
      }

      e.preventDefault();

      var formData = {
        subcategory_id: this.subcategory,
        desc: this.description
      };

      try {
        await axios
          .post("/api/task/create", formData)
          /*eslint-disable*/
          .then(res => console.log("res", res));
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
h3 {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 32px;
  margin: 50px 0;
}
</style>
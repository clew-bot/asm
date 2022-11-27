<template>
        <div class="flex flex-col gap-5">
            
            <div class="flex items-center pt-3">
                <IconComponent :props="{ name: 'mdi-account', size: 'default' }" />
                <div class="pl-2">Chad Lew</div>
            </div>
            <div class="flex items-center">
                <IconComponent :props="{ name: 'mdi-at', size: 'default' }" />
                <div class="pl-2">MochiTheDog</div>
            </div>
            <div class="flex items-center">
                <IconComponent :props="{ name: 'mdi-map-marker', size: 'default' }" />
                <div class="pl-2">San Fransisco</div>
            </div>
            <div class="flex items-center">
                <IconComponent :props="{ name: 'mdi-cake-variant', size: 'default' }" />
                <div class="pl-2">July 21, 1995</div>
            </div>
           
        <!-- <v-file-input
        bg-color="#4b5563"
        class="pt-4"
            accept="image/*"
            label="Profile Picture"
            variant="solo"
        ></v-file-input>
        <v-text-field
        bg-color="#4b5563"
        variant="solo"
        append-inner-icon="mdi-account"
        label="Name"
        placeholder="Mark Twain"
        type="email"
        ></v-text-field>
        <v-text-field
        bg-color="#4b5563"
        variant="solo"
        append-inner-icon="mdi-account-star"
        label="Handle"
        placeholder="@MarkTwain69"
        type="email"
        ></v-text-field>
        <v-text-field
        bg-color="#4b5563"
        variant="solo"
        append-inner-icon="mdi-map-marker"
        label="Location"
        placeholder="San Fransisco, CA"
        type="email"
        ></v-text-field>
        <v-text-field
        bg-color="#4b5563"
              v-model="dateFormatted"
              variant="solo"
              label="Birthday"
              hint="MM/DD/YYYY format"
              persistent-hint
              append-inner-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field> -->
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>
Vue.component('stories-component', {
    props: ['story', 'stories', 'sortedStories'],
    template: 
    `<div class="card col-4 m-2">
        <img class="card-img-top" :src="story.storyImage" />
        <div class="card-body">
            <h5 class="card-title">{{ story.title }}</h5>
            <p class="card-text">{{ story.text }}</p>
            <p class="card-text">
                <small class="text-muted">{{ story.postedAt }}</small>
            </p>
            <button class="btn btn-primary" @click="upVote(story.id)">UpVote</button>
            <span class="badge float-right" :class="[story.votes >= 10 ? 'badge-success' : 'badge-secondary']">{{ story.votes }}</span>
        </div>
    </div>`,
    methods: {
        upVote(storyId){
            const index = this.stories.findIndex(story => story.id === storyId)
            this.stories[index].votes++
        }
    }
})

new Vue({
    el: '#app',
    data: {
        stories: feed.stories
    },
    computed: {
        sortedStories(){
            return this.stories.sort((a, b) => {
                return b.votes - a.votes
            })
        }
    }
})
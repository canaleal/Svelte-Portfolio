<script lang="ts">
  import { EXPERIENCE } from './constants'
  import InfiniteScroll from '../../components/elements/infiniteScroll.svelte'
  import { getUniqueTechnologiesWithIcon } from '$lib/utils/devicon-icons'
  import { getAllExperienceTechnologies } from './utils/experienceUtils'

  const uniqueTechnologies = getUniqueTechnologiesWithIcon(getAllExperienceTechnologies(EXPERIENCE))
</script>

<div class="">
  <InfiniteScroll items={uniqueTechnologies}  rows={1}/>
</div>

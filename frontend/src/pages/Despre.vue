<template>
  <Layout>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ $page.strapi.despre.hero.title }}</h1>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  strapi {
    global {
      siteName
      favicon {
        url
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
    despre {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
    articles(where: { status: "published" }) {
      slug
      title
      category {
        name
      }
      image {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import Articles from "~/components/Articles";
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";

export default {
  components: {
    Articles,
  },
  metaInfo() {
    const { seo } = this.$page.strapi.despre;
    const { defaultSeo, favicon } = this.$page.strapi.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
